import Image from "next/image";
import styles from "./page.module.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Botton web3</h1>
      <ConnectButton />
    </main>
  );
}
