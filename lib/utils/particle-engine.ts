/**
 * Particle Engine Utilities
 * Core particle system logic for interactive particle effects
 */

import { primaryColors } from '@/lib/design-tokens/colors'

export interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

export interface ParticleConfig {
  count: number
  colors: string[]
  minSize: number
  maxSize: number
  minSpeed: number
  maxSpeed: number
  minOpacity: number
  maxOpacity: number
  lifeSpan?: number
  interactive?: boolean
  mouseReactive?: boolean
  scrollReactive?: boolean
}

export const defaultParticleConfig: ParticleConfig = {
  count: 50,
  colors: [
    primaryColors.blue[500],
    primaryColors.purple[600],
    primaryColors.cyan[500],
    primaryColors.pink[500],
  ],
  minSize: 0.5,
  maxSize: 3,
  minSpeed: 0.1,
  maxSpeed: 0.5,
  minOpacity: 0.1,
  maxOpacity: 0.5,
  interactive: true,
  mouseReactive: true,
  scrollReactive: false,
}

/**
 * Create a new particle
 */
export function createParticle(
  width: number,
  height: number,
  config: ParticleConfig = defaultParticleConfig
): Particle {
  const random = (min: number, max: number) => Math.random() * (max - min) + min

  return {
    x: random(0, width),
    y: random(0, height),
    vx: random(-config.maxSpeed, config.maxSpeed),
    vy: random(-config.maxSpeed, config.maxSpeed),
    size: random(config.minSize, config.maxSize),
    opacity: random(config.minOpacity, config.maxOpacity),
    color: config.colors[Math.floor(Math.random() * config.colors.length)],
    life: 0,
    maxLife: config.lifeSpan || Infinity,
  }
}

/**
 * Update particle position
 */
export function updateParticle(
  particle: Particle,
  width: number,
  height: number,
  mouseX?: number,
  mouseY?: number,
  scrollY?: number
): Particle {
  let { x, y, vx, vy, life } = particle

  // Mouse interaction
  if (mouseX !== undefined && mouseY !== undefined) {
    const dx = mouseX - x
    const dy = mouseY - y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = 100

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance
      vx -= (dx / distance) * force * 0.02
      vy -= (dy / distance) * force * 0.02
    }
  }

  // Scroll interaction
  if (scrollY !== undefined) {
    vy += scrollY * 0.001
  }

  // Update position
  x += vx
  y += vy

  // Boundary collision
  if (x < 0 || x > width) vx *= -1
  if (y < 0 || y > height) vy *= -1

  // Keep within bounds
  x = Math.max(0, Math.min(width, x))
  y = Math.max(0, Math.min(height, y))

  // Update life
  life += 1

  return {
    ...particle,
    x,
    y,
    vx,
    vy,
    life,
  }
}

/**
 * Draw particle on canvas
 */
export function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle
): void {
  ctx.save()
  ctx.globalAlpha = particle.opacity
  ctx.fillStyle = particle.color
  ctx.beginPath()
  ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

/**
 * Draw connection lines between particles
 */
export function drawConnections(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  maxDistance: number = 150
): void {
  ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'
  ctx.lineWidth = 0.5

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.2
        ctx.globalAlpha = opacity
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  ctx.globalAlpha = 1
}

/**
 * Initialize particle system
 */
export function initializeParticles(
  width: number,
  height: number,
  config: ParticleConfig = defaultParticleConfig
): Particle[] {
  return Array.from({ length: config.count }, () =>
    createParticle(width, height, config)
  )
}

