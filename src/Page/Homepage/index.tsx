import style from './style.module.css';

export const Homepage: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main className={style.homepage}>
      {children}
      <header className={style.header}>
        <div className={style.brand}></div>
        <div className={style.menu}>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className={style.user}></div>
      </header>
      <article className={style.article}>
        <div className={style.featured}></div>
        <div className={style.container}>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
        </div>
      </article>
      <aside className={style.aside}>
      <div className={style.featured}></div>
      <div className={style.card}></div>
      </aside>
    </main>
  )
}