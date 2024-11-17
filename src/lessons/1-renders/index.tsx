import RenderCount from "../../components/render-count";

const FunctionalComponent: React.FC = () => {
  // Every line of code inside the function body is executed every time the component renders

  return <RenderCount />;
};

export default FunctionalComponent;
