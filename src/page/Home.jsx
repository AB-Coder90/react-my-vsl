const Home = () => {
  return (
    <main className="bg-white">
      <div className="relative max-w-4xl mx-auto">
        
      <img
  src="/ambulance2.jpg"
  alt="Ambulance"
  className="w-[500px] h-[500px] object-contain mx-auto"
/>
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
    <h2 className="text-3xl font-bold text-center">Votre santé, notre priorité : Trouvez vite votre transport</h2>
    <p className="mt-2 text-base">La meilleur facon de gagner du temps</p>
  </div>
</div>
    </main>
  );
};

export default Home;


