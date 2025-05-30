import { useEffect, useState } from "react";
import { AuthService } from "auth-oidc";

const authService = new AuthService({
  authority: "https://accounts.universitywithme.org.ua/realms/KhPI",
  clientId: "student-lab",
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = await authService.isLoggedIn();
      setIsLoggedIn(loggedIn);

      if (loggedIn) {
        const userName = await authService.getUserInfo("name");
        const accessToken = await authService.getToken();
        setUserInfo(userName);
        setToken(accessToken);
      }
    };

    checkLogin();
  }, []);

  const handleLogin = async () => {
    await authService.login();
  };

  const handleLogout = async () => {
    await authService.logout();
  };

  return (
    <div style={{ padding: 20 }}>
      {!isLoggedIn ? (
        <div>
          <h2>Ви не авторизовані</h2>
          <button onClick={handleLogin}>Увійти</button>
        </div>
      ) : (
        <div>
          <h2>Вітаємо, {userInfo}!</h2>
          <p>
            <strong>Ваш токен:</strong> {token}
          </p>
          <button onClick={handleLogout}>Вийти</button>
        </div>
      )}
    </div>
  );
}

export default App;
