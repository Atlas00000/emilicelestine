/**
 * 3D Transform Utilities
 * Utilities for 3D transformations and perspective effects
 */

export interface Transform3DConfig {
  perspective: number
  rotateX: number
  rotateY: number
  rotateZ: number
  translateX: number
  translateY: number
  translateZ: number
  scale: number
}

export const default3DConfig: Transform3DConfig = {
  perspective: 1000,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  scale: 1,
}

/**
 * Create 3D transform string
 */
export function create3DTransform(config: Partial<Transform3DConfig> = {}): string {
  const {
    perspective = default3DConfig.perspective,
    rotateX = default3DConfig.rotateX,
    rotateY = default3DConfig.rotateY,
    rotateZ = default3DConfig.rotateZ,
    translateX = default3DConfig.translateX,
    translateY = default3DConfig.translateY,
    translateZ = default3DConfig.translateZ,
    scale = default3DConfig.scale,
  } = { ...default3DConfig, ...config }

  return `
    perspective(${perspective}px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    rotateZ(${rotateZ}deg)
    translateX(${translateX}px)
    translateY(${translateY}px)
    translateZ(${translateZ}px)
    scale(${scale})
  `.trim()
}

/**
 * Create 3D transform style object
 */
export function create3DTransformStyle(
  config: Partial<Transform3DConfig> = {}
): React.CSSProperties {
  const {
    perspective = default3DConfig.perspective,
    rotateX = default3DConfig.rotateX,
    rotateY = default3DConfig.rotateY,
    rotateZ = default3DConfig.rotateZ,
    translateX = default3DConfig.translateX,
    translateY = default3DConfig.translateY,
    translateZ = default3DConfig.translateZ,
    scale = default3DConfig.scale,
  } = { ...default3DConfig, ...config }

  return {
    perspective: `${perspective}px`,
    transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) scale(${scale})`,
    transformStyle: 'preserve-3d',
  }
}

/**
 * Calculate 3D tilt from mouse position
 */
export function calculate3DTilt(
  mouseX: number,
  mouseY: number,
  width: number,
  height: number,
  maxTilt: number = 15
): { rotateX: number; rotateY: number } {
  const centerX = width / 2
  const centerY = height / 2

  const deltaX = mouseX - centerX
  const deltaY = mouseY - centerY

  const rotateY = (deltaX / centerX) * maxTilt
  const rotateX = -(deltaY / centerY) * maxTilt

  return {
    rotateX: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
    rotateY: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
  }
}

