import * as THREE from 'three';

class GameEngine {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    
    this.init();
  }

  private init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;
    this.animate();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    // Burada fizik güncellemeleri ve AI mantığı çağrılacak
    this.renderer.render(this.scene, this.camera);
  }
}

new GameEngine();

