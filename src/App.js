import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
			<div id="Box">
        <form>
					<text className="Text">Логин</text>
					<p><input id="input" name="login" /></p>
					<text className="Text">Пароль</text>
					<p><input id="input" name="password" /></p>
					<p><input className="Button" type="submit" value="Войти" /></p>	
				</form>
			</div>
			</header>
    </div>
  );
}

export default App;
