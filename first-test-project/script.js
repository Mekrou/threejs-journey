import * as THREE from 'three'
console.log(THREE)

const sizes = {
    width: 800,
    height: 600.
}

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: THREE.Color.NAMES.red})

const box = new THREE.Mesh(geometry, material)

scene.add(box)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
scene.add(camera)