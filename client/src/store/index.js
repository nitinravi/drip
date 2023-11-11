import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#E84545',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './D_logo.png',
  fullDecal: './D_logo.png',
})

export default state
