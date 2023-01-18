import Sliders from "./components/Sliders";


function App() {


  const slides = [
    {
      id:1,
      image:'https://cdn.mwallpapers.com/photos/celebrities/nature/milky-way-looking-south-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-d0u89.jpg'
    },
    {
      id:2,
      image:'https://www.nhm.ac.uk/content/dam/nhmwww/discover/penguins-future-fabrics/king-penguins-shutterstock-1080x600.jpg.thumb.1160.1160.jpg'
    },
    {
      id:3,
      image:'https://www.chrisknott.co.uk/wp-content/uploads/2022/05/tesla-electric-car-1080x600.png'
    },
    {
      id:4,
      image:'https://cdn.mwallpapers.com/photos/celebrities/hd-wallpapers/vaporwave-1980s-colorful-car-de-tomaso-pantera-gts-fast-runner-2024-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-pbuf5.jpg'
    },
    {
      id:5,
      image:'https://dreamdriveexotics.com/wp-content/uploads/2017/04/1-1080x600.jpg'
    },

  ]

  return (
    <div className="App">
        <Sliders slider={slides} />
    </div>
  );
}

export default App;
