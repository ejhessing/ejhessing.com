// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// interface SpinningBallProps {}

// const SpinningHex: React.FC<SpinningBallProps> = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMouseOver, setIsMouseOver] = useState(false);
//   const isMouseOverRef = useRef(isMouseOver);
//   const mouse = new THREE.Vector2();

//   useEffect(() => {
//     isMouseOverRef.current = isMouseOver;
//   }, [isMouseOver]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     let container: HTMLDivElement | null;
//     let renderer: THREE.WebGLRenderer;
//     let camera: THREE.PerspectiveCamera;
//     let scene: THREE.Scene;
//     let mesh: THREE.Mesh;
//     let light: THREE.DirectionalLight;
//     let mouseX = 0,
//       mouseY = 0;

//     const init = () => {
//       container = containerRef.current;

//       if (!container) return;

//       const containerWidth = container.clientWidth;
//       const containerHeight = container.clientHeight;
//       camera = new THREE.PerspectiveCamera(
//         20,
//         containerWidth / containerHeight,
//         1,
//         10000
//       );
//       camera.position.z = 1800;

//       scene = new THREE.Scene();
//       scene.background = new THREE.Color(0x1f2937);

//       light = new THREE.DirectionalLight(0xffffff);
//       light.position.set(0, 0, 1);
//       scene.add(light);

//       const radius = 200;
//       const geometry = new THREE.IcosahedronGeometry(radius, 1);

//       const count = geometry.attributes.position.count;
//       geometry.setAttribute(
//         "color",
//         new THREE.BufferAttribute(new Float32Array(count * 3), 3)
//       );

//       const color = new THREE.Color();
//       const positions = geometry.attributes.position as THREE.BufferAttribute;
//       const colors = geometry.attributes.color as THREE.BufferAttribute;

//       for (let i = 0; i < count; i++) {
//         color.setHSL(0.65, (positions.getY(i) / radius + 1) / 2, 0.5);
//         colors.setXYZ(i, color.r, color.g, color.b);
//       }

//       const material = new THREE.MeshPhongMaterial({
//         color: 0xffffff,
//         flatShading: true,
//         vertexColors: true,
//         shininess: 80,
//       });

//       mesh = new THREE.Mesh(geometry, material);
//       scene.add(mesh);

//       renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setPixelRatio(window.devicePixelRatio);
//       renderer.setSize(containerWidth, containerHeight);
//       container.appendChild(renderer.domElement);

//       initMouseListeners();
//     };

//     function initMouseListeners() {
//       window.addEventListener("resize", onWindowResize);
//       containerRef.current?.addEventListener("mousemove", onDocumentMouseMove);
//       containerRef.current?.addEventListener("mouseenter", () => {
//         console.log("mouse enter");
//         setIsMouseOver(true);
//       });
//       containerRef.current?.addEventListener("mouseleave", () => {
//         setIsMouseOver(false);
//       });
//     }

//     function onWindowResize() {
//       if (!container) return;
//       const containerWidth = container.clientWidth;
//       const containerHeight = container.clientHeight;
//       camera.aspect = containerWidth / containerHeight;
//       camera.updateProjectionMatrix();

//       renderer.setSize(containerWidth, containerHeight);
//     }

//     function onDocumentMouseMove(event: { clientX: number; clientY: number }) {
//       const windowHalfX = window.innerWidth / 2;
//       const windowHalfY = window.innerHeight / 2;

//       mouse.x = (event.clientX - windowHalfX) / windowHalfX;
//       mouse.y = -(event.clientY - windowHalfY) / windowHalfY;
//     }

//     const animate = () => {
//       requestAnimationFrame(animate);
//       render();
//     };

//     const render = () => {
//       if (!isMouseOverRef.current) {
//         mesh.rotation.y += 0.03;
//       } else {
//         mesh.rotation.y += 0.01;

//         light.position.set(mouse.x * 2, mouse.y * 2, 1);
//         light.position.normalize();
//       }

//       renderer.render(scene, camera);
//     };

//     init();
//     animate();

//     return () => {
//       window.removeEventListener("resize", onWindowResize);
//       if (containerRef.current) {
//         containerRef.current.removeEventListener(
//           "mousemove",
//           onDocumentMouseMove
//         );
//         containerRef.current.removeEventListener("mouseenter", () => {
//           setIsMouseOver(true);
//         });
//         containerRef.current.removeEventListener("mouseleave", () => {
//           setIsMouseOver(false);
//         });
//       }

//       // Remove the mesh from the scene
//       scene.remove(mesh);

//       // Dispose of the WebGLRenderer, materials, and geometries
//       renderer.dispose();
//       // Remove the renderer's DOM element from the container
//       containerRef.current?.removeChild(renderer.domElement);

//       // Dispose of the material(s)
//       if (Array.isArray(mesh.material)) {
//         mesh.material.forEach((material) => material.dispose());
//       } else {
//         mesh.material.dispose();
//       }

//       // Dispose of the geometry
//       mesh.geometry.dispose();
//     };
//   }, []);

//   return <div ref={containerRef} className="w-full h-full"></div>;
// };

// export default React.memo(SpinningHex);

export default function SpinningHex() {
  return <></>;
}
