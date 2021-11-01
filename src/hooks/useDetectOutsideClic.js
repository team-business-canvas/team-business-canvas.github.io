import { useEffect } from 'react'

function useDetectOutsideClick(ref, setState) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // dom 바깥 클릭
        console.log('should off')
        setState(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setState])
}

export default useDetectOutsideClick
