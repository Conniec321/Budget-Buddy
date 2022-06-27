import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



// export default function useAsyncStorage(key, initialValue) {
//     const [storedValue, setStoredValue] = useState();
  
//     async function getStoredItem(key, initialValue) {
//       try {
//         const item = await AsyncStorage.getItem(key);
//         const value = item ? JSON.parse(item) : initialValue;
//         setStoredValue(value);
//       } catch (error) {
//         console.log(error);
//       }
//     }
  
//     useEffect(() => {
//       getStoredItem(key, initialValue);
//     }, [key, initialValue]);
  
//     const setValue = async (value) => {
//       try {
//         const valueToStore =
//           value instanceof Function ? value(storedValue) : value;
//         setStoredValue(valueToStore);
//         await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     return [storedValue, setValue];
//   }


export default  function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(async () => {
        const jsonValue = await AsyncStorage.getItem(key)
        if (jsonValue != null && jsonValue !== {}) {
            console.log(jsonValue, 'value')
            return JSON.parse(jsonValue) }
        // JSON.parse(jsonValue)

        if (typeof defaultValue === 'function') {
            return defaultValue()
        }
        else {
            return defaultValue
        }
    })

    useEffect(async () => {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }, [key,value])

    return [value, setValue]
}