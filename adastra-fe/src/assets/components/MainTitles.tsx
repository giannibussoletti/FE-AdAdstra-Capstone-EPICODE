type propString = {
  title: string
}

const MainTitles = ({ title }: propString) => {
  return (
    <>
      <h2 className="mb-4">
        <span className="underline-gradient">{title}</span>
      </h2>
    </>
  )
}

export default MainTitles
