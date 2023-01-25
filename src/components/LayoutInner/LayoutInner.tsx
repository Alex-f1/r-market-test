interface ILayoutProps {
  children: React.ReactNode
}

function LayoutInner(props: ILayoutProps) {
  return (
    <div className="container py-20 px-4 mx-auto">
      {props.children}
    </div>
  )
}

export default LayoutInner;