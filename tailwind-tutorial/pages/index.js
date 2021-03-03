import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<section className="py-10 w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
					<h1 className="mb-4 text-red-500 text-3xl">サンプル</h1>
					<p className="mb-2 text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
						blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus
						quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis
						repellendus sapiente voluptatibus.
					</p>
					<button className="btn-blue">Let's Start!!</button>
				</section>
        
				<section className="py-10 w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
					<h1 className="mb-4 text-red-500 text-3xl">サンプル</h1>
					<p className="mb-2 text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
						blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus
						quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis
						repellendus sapiente voluptatibus.
					</p>
					<button className="btn-blue">Let's Start!!</button>
				</section>

				<section className="py-10 w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
					<h1 className="mb-4 text-red-500 text-3xl">サンプル</h1>
					<p className="mb-2 text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
						blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus
						quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis
						repellendus sapiente voluptatibus.
					</p>
					<button className="btn-blue">Let's Start!!</button>
				</section>

				<section className="py-10 w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
					<h1 className="mb-4 text-red-500 text-3xl">サンプル</h1>
					<p className="mb-2 text-center">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
						blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus
						quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis
						repellendus sapiente voluptatibus.
					</p>
					<button className="btn-blue">Let's Start!!</button>
				</section>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
