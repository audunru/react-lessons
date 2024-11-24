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
      className="absolute right-2 top-2 rounded bg-gray-800 px-2 py-1 text-sm text-white hover:bg-gray-700"
    >
      Copy
    </button>
  );
};

export default CopyButton;
