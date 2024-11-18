interface CopyButtonProps {
  text: string;
}

const CopyButton = (props: CopyButtonProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.text);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={() => void handleCopy()}
      className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded hover:bg-gray-700"
    >
      Copy
    </button>
  );
};

export default CopyButton;
