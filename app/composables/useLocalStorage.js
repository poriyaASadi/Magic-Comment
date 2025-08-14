
// how to use 

// const {value : loop , setValue : setLoop } = useLocalStorage("loop","poriya"); 
// console.log(loop.value);
// setLoop("poriya asadi");

export function useLocalStorage(key, initialValue = '', isUpdate = false) {
  const storedValue = ref(initialValue);

  const readValue = () => {
    try {
      if (typeof window !== 'undefined') {
        const item = localStorage.getItem(key);
        return item ? item : initialValue;
      }
      return initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };
  const setValue = (newValue) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, newValue);
        storedValue.value = newValue;
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }
  storedValue.value = readValue();
  if (isUpdate) {
    setValue(initialValue);
  }

  watchEffect(() => {
    setValue(storedValue.value);
  })

  return {
    valueD : unref(storedValue),
    setValue,
  };
}