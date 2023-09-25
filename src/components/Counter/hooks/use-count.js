import { useState } from "react";
import { useCallback } from "react";

export function useCount({ defaultCount, min, max, onCountChange}) {
  const [count, setCount] = useState(defaultCount);
  
  const decrement = useCallback(()=> {
      setCount((currentCount) =>  {
        if (min === undefined || count !== min) {
          const newValue = currentCount - 1;
          onCountChange(newValue);
          return newValue;
        }
        return currentCount;
      })
  }, [ min, onCountChange]);

  const increment = useCallback(()=> {
    setCount((currentCount) =>  {
      if (min === undefined || count !== max) {
        const newValue = currentCount + 1;
        onCountChange(newValue);
        return newValue;
      }
      return currentCount;
    })
}, [ min, onCountChange]);

  return  { count, decrement, increment };
}