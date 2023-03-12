import Image from "next/image";

function Loading() {
  return (
    <div>
      <Image src="spinner.svg" alt="Loading......" width={1000} height={1000} />
    </div>
  );
}

export default Loading;
