import Sidebar from './Sidebar';
import Header from './Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
