class Stage {
  
  constructor(mount) {
    
    this.container = mount;
    this.lines = [];
    
    this.scene = new THREE.Scene();
    this.scene.background = null;
    
    this.tickFunctions = [];
    
    this.size = {
      width: 1,
      height: 1
    }
    
    this.setupCamera();
    this.setupRenderer();
    this.onResize();
    window.addEventListener('resize', () => setTimeout(() => this.onResize(), 500));
    
    this.tick();
  }
  
  setupCamera() {
    
    this.lookAt = new THREE.Vector3(0, 0, 0);
    this.camera = new THREE.PerspectiveCamera(40, this.size.width / this.size.height, 0.1, 150);
    this.camera.position.set(0, 80, 100);
    this.camera.home = {
      position: { ...this.camera.position }
    }
    
    this.add(this.camera);
  }
  
  setupRenderer() {
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    })
    
    this.container.appendChild( this.renderer.domElement );
  }
  
  onResize() {
    
    this.size.width = this.container.clientWidth;
    this.size.height = this.container.clientHeight;
    
    this.camera.aspect = this.size.width / this.size.height
    this.camera.updateProjectionMatrix()
    
    this.renderer.setSize(this.size.width, this.size.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
  
  addTickFunction(tickFunction)
  {
    this.tickFunctions.push(tickFunction)
  }
  
  tick() {
    this.camera.lookAt(this.lookAt);
    this.tickFunctions.forEach(func => func())
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(() => this.tick())
  }
  
  add(element) { this.scene.add(element);}
  
  destroy() {
    
    this.container.removeChild( this.renderer.domElement);
    window.removeEventListener('resize', this.onResize);
  }
}

class Line
{
  constructor(width, color, radius, near, far) {
    this.color = color;
    this.width = width;
    this.radius = radius;
    this.near = near;
    this.far = far;
    this.dashLength = 5 ;
    this.travelDistance = 1;
    this.mesh = null;
    this.createLine()
  }
  
  createLine()
  {
    const points = [];
    var angle = Math.random() * TAU
    this.radius += Math.random() * 0.1
    
    let pos = {
      x: Math.cos(angle) * this.radius,
      y: 0,
      z: Math.sin(angle) * this.radius
    }
    
    let direction = angle + 1 + (Math.random() * 0.1);
    let y = 0;
    
    const steps = 75;
    
    for (let j = 0; j < steps; j ++) {
      
      direction += (0.012 * ((steps - j) * 0.1)) + (-0.4 + Math.random() * 0.8 ) * (j * (Math.random() * 0.02));
      y += (-1 + Math.random() * 2)  * (j * 0.001);
      
      pos.x += Math.cos(direction) * this.travelDistance
      pos.y += Math.sin(y) * this.travelDistance
      pos.z += Math.sin(direction) * this.travelDistance
      
      points.push(pos.x, pos.y, pos.z);
    }
    
    const line = new MeshLine();
    line.setPoints(points,  p => this.width * Math.pow(1 - Math.cos(TAU * p), 0.3)  );
    
    const material = new MeshLineMaterial({
      color: new THREE.Color(this.color),
      transparent: true,
      depthTest: false,
      dashArray: this.dashLength,
      dashOffset: 0,
      dashRatio: 0.92
    });
    
    this.mesh = new THREE.Mesh(line, material);
    
    setTimeout(() => {
      const delayedStart = Math.random() > 0.3;
      if(delayedStart) setTimeout(() => this.animate(), 100 + Math.random() * 4000)
      else this.animate(false)
    }, 1000)
  }
  
  animate(slow = true)
  {
    const duration = (slow ? 4 : 3) + Math.random() * 1;
    const ease = 'power4.inOut';
    const brightness = slow ? .8 : 1;
    
    gsap.fromTo(this.mesh.material.uniforms.dashOffset,
        { value: 0 },
        {
          value: -this.dashLength * 0.3,
          duration,
          ease,
          onComplete: () => setTimeout(() => this.animate(), Math.random() * 4000)
        })
    const color = this.mesh.material.uniforms.color.value;
    gsap.registerPlugin(MotionPathPlugin);
  
    gsap.fromTo(color, { r: 0, g: 0, b: 0, }, {
      motionPath: [
        {
          r: color.r + brightness,
          g: color.g + brightness,
          b: color.b + brightness,
        },
        {
          r: color.r,
          g: color.g,
          b: color.b,
        }
      ],
      duration: duration * 0.5,
      ease: 'power2.in'
    })
  }
}

const TAU = Math.PI * 2;
const colors = ["#f94144","#f3722c","#f8961e","#f9844a","#f9c74f","#90be6d","#43aa8b","#4d908e","#577590","#277da1"]

const canvas = document.getElementById('webgl');
const stage = new Stage(canvas);

const lineGroup = new THREE.Group();
lineGroup.rotation.y = Math.PI
stage.add(lineGroup);

for (let i = 0; i < 600; i++) {
  
  const lineThickness = 0.1 + Math.random() * 0.1;
  const startRadius = 2 + Math.random() * 0.5;
  const lineColor = colors[Math.floor(Math.random() * colors.length)];
  
  const line = new Line(
      lineThickness,
      lineColor,
      startRadius,
      stage.camera.near,
      stage.camera.far
  )
  lineGroup.add(line.mesh);
  stage.lines.push({
    obj: line,
    speed: 0.002 + Math.random() * 0.009
  });
}

const tick = () => {
  lineGroup.rotation.y += 0.01;
  lineGroup.rotation.x = Math.cos(lineGroup.rotation.y * 1.2) * 0.5;
  lineGroup.rotation.z = Math.sin(lineGroup.rotation.y) * 0.01;
}

stage.addTickFunction(tick)
