import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SpinningBall = ({ id }) => {
  const containerRef = useRef(null);
  let isInitialized = false; // Add this line
  const [isMouseOverState, setIsMouseOverState] = useState(false);
  const isMouseOverRef = useRef(isMouseOverState); // Create the ref to store isMouseOver value

  useEffect(() => {
    isMouseOverRef.current = isMouseOverState; // Update the ref value whenever isMouseOverState changes
  }, [isMouseOverState]);

  useEffect(() => {
    let container, renderer, camera, scene, mesh, light;
    let mouseX = 0,
      mouseY = 0;

    const init = () => {
      console.log("init", id);
      container = containerRef.current;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      camera = new THREE.PerspectiveCamera(
        20,
        containerWidth / containerHeight,
        1,
        10000
      );
      camera.position.z = 1800;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1f2937);

      light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 0, 1);
      scene.add(light);

      const radius = 200;
      const geometry = new THREE.IcosahedronGeometry(radius, 1);

      const count = geometry.attributes.position.count;
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(count * 3), 3)
      );

      const color = new THREE.Color();
      const positions = geometry.attributes.position;
      const colors = geometry.attributes.color;

      for (let i = 0; i < count; i++) {
        color.setHSL(0.65, (positions.getY(i) / radius + 1) / 2, 0.5);
        colors.setXYZ(i, color.r, color.g, color.b);
      }

      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true,
        vertexColors: true,
        shininess: 20,
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(containerWidth, containerHeight);
      container.appendChild(renderer.domElement);
      const pointLight = new THREE.PointLight(0xffffff, 1, 0);
      pointLight.position.set(100, 100, 100);
      scene.add(pointLight);

      window.addEventListener("resize", onWindowResize);
      container.addEventListener("mousemove", onDocumentMouseMove);
    };

    function onWindowResize() {
      // Set camera aspect ratio and renderer size based on the container's size
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(containerWidth, containerHeight);
    }

    const onDocumentMouseMove = (event) => {
      const containerRect = container.getBoundingClientRect();
      mouseX =
        ((event.clientX - containerRect.left) / container.clientWidth) * 2 - 1;
      mouseY =
        (-(event.clientY - containerRect.top) / container.clientHeight) * 2 + 1;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      if (!isMouseOverRef.current) {
        mesh.rotation.y += 0.01;
      } else {
        const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const newPos = camera.position
          .clone()
          .add(dir.multiplyScalar(distance));
        mesh.position.lerp(newPos, 0.1);
      }

      renderer.render(scene, camera);
    };

    if (isInitialized) return; // Add this line
    console.log("init");
    init();
    isInitialized = true; // Add this line
    animate();

    return () => {
      console.log("clean up");
      console.log("clean up", id);
      window.removeEventListener("resize", onWindowResize);
      container.removeEventListener("mousemove", onDocumentMouseMove);
      // container.removeEventListener("mouseenter", () => {
      //   isMouseOver = true;
      // });
      // container.removeEventListener("mouseleave", () => {
      //   isMouseOver = false;
      // });

      // Dispose of the WebGLRenderer, materials, and geometries
      renderer.dispose();

      // Dispose of the materials
      mesh.material.dispose();

      // Dispose of the geometries
      mesh.geometry.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      onMouseEnter={() => {
        console.log("asdas");
        setIsMouseOverState(true);
      }}
      onMouseLeave={() => setIsMouseOverState(false)}
    ></div>
  );
};

export default React.memo(SpinningBall);
