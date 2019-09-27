import {
  FETCH_UPPER_PLACEHOLDER,
  CLEAR_UPPER_PLACEHOLDER,
} from './types'

export const fetchPASCAL_PLACEHOLDER = () => ({
  type: FETCH_UPPER_PLACEHOLDER,
  request: {
    url: '',
    method: 'GET'
  }
})

export const clearPASCAL_PLACEHOLDER = () => ({
  type: CLEAR_UPPER_PLACEHOLDER
})
