import * as PLACEHOLDERRepo from './PLACEHOLDER.repository'

export async function getPASCAL_PLACEHOLDER() {
  return PLACEHOLDERRepo.getPASCAL_PLACEHOLDER()
}

export async function createPASCAL_PLACEHOLDER(PLACEHOLDER) {
  return PLACEHOLDERRepo.createPASCAL_PLACEHOLDER(PLACEHOLDER)
}

export async function getPASCAL_PLACEHOLDERById(id: string) {
  return PLACEHOLDERRepo.getPASCAL_PLACEHOLDERById(id)
}

export async function updatePASCAL_PLACEHOLDER(PLACEHOLDER) {
  return PLACEHOLDERRepo.updatePASCAL_PLACEHOLDER(PLACEHOLDER)
}

export async function deletePASCAL_PLACEHOLDER(id: string) {
  return PLACEHOLDERRepo.deletePASCAL_PLACEHOLDER(id)
}
