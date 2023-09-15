type props = {
  params: {
    detailsId: string;
  };
};

export default async function Page({ params }: props) {
  const { detailsId } = params;

  // const

  return (
    <div>
      <h1>page about details</h1>
      <p>creating .....</p>
      <p>paramss {detailsId}</p>
    </div>
  );
}
