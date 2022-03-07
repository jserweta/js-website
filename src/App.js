import "./sass/_normalize.scss";
import "./sass/global.scss";
import "./sass/_app.scss";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import React from "react";
import AboutMe from "./components/about-me/AboutMe";
import NavProvider from "./context/NavContext";

const App = () => {
  return (
    <div className="App">
      <NavProvider>
        <NavBar />
        <main className="mainContent">
          <Home />
          <AboutMe />
          <p>
            Item Item Item Item Non enim praesent elementum facilisis. Facilisis
            volutpat est velit egestas dui id ornare. Lobortis mattis aliquam
            faucibus purus. Volutpat consequat mauris nunc congue nisi vitae.
            Quis auctor elit sed vulputate. Nisl nisi scelerisque eu ultrices
            vitae auctor eu. Imperdiet sed euismod nisi porta lorem. Sed
            faucibus turpis in eu mi bibendum neque. Id eu nisl nunc mi. At erat
            pellentesque adipiscing commodo elit at imperdiet dui accumsan. Sed
            ullamcorper morbi tincidunt ornare massa eget egestas purus.
            Facilisis mauris sit amet massa vitae. Mauris a diam maecenas sed
            enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada fames
            ac turpis egestas maecenas pharetra convallis. Adipiscing enim eu
            turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Item Item Item Item Non enim praesent elementum facilisis.
            Facilisis volutpat est velit egestas dui id ornare. Lobortis mattis
            aliquam faucibus purus. Volutpat consequat mauris nunc congue nisi
            vitae. Quis auctor elit sed vulputate. Nisl nisi scelerisque eu
            ultrices vitae auctor eu. Imperdiet sed euismod nisi porta lorem.
            Sed faucibus turpis in eu mi bibendum neque. Id eu nisl nunc mi. At
            erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.
            Sed ullamcorper morbi tincidunt ornare massa eget egestas purus.
            Facilisis mauris sit amet massa vitae. Mauris a diam maecenas sed
            enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada fames
            ac turpis egestas maecenas pharetra convallis. Adipiscing enim eu
            turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor. Sed ullamcorper morbi tincidunt ornare massa eget egestas
            purus. Facilisis mauris sit amet massa vitae. Mauris a diam maecenas
            sed enim ut sem. Libero id faucibus nisl tincidunt. Et malesuada
            fames ac turpis egestas maecenas pharetra convallis. Adipiscing enim
            eu turpis egestas pretium aenean pharetra magna ac. Nec feugiat in
            fermentum posuere urna nec tincidunt praesent semper. Integer enim
            neque volutpat ac. Mi in nulla posuere sollicitudin aliquam ultrices
            sagittis. Ullamcorper a lacus vestibulum sed arcu non odio euismod
            lacinia. Dolor sed viverra ipsum nunc aliquet bibendum. Nunc vel
            risus commodo viverra maecenas. Id velit ut tortor pretium viverra
            suspendisse potenti nullam. Maecenas sed enim ut sem viverra
            aliquet. Faucibus turpis in eu mi bibendum neque egestas congue.
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Mattis
            nunc sed blandit libero. Quam pellentesque nec nam aliquam sem et
            tortor.
          </p>
          <div className="overflow"></div>
        </main>
      </NavProvider>
    </div>
  );
};

export default App;
