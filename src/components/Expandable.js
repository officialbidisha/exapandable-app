import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";
export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ onExpand, children, className = "", ...otherProps }) => {
  const combinedClasses = ["Expandable", className].filter(Boolean).join("");

  /**
   * State to update the expanded behaviour
   */
  const [expanded, setExpanded] = useState(false);

  /**
   * Check for mounting
   */
  const componentJustMounted = useRef(true);

  /**
   * Method for toggling the expanded state
   */
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  /**
   * Function to call when the expanded state is altered tp true,
   * that is when the expansion happens.
   */
  useEffect(() => {
    if (!componentJustMounted.current) {
      onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded, onExpand]);

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return (
    <Provider value={value}>
      <div className={combinedClasses} {...otherProps}>{children}</div>
    </Provider>
  );
};
export default Expandable;
