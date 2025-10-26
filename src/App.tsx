import GallerySection from './components/GallerySection';
import TabsSection from './components/TabsSection';

function App() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {/* Left empty column */}
        <div className="hidden md:block"></div>
        
        {/* Right column with widgets */}
        <div className="flex flex-col gap-8">
          <TabsSection />
          <GallerySection />
        </div>
      </div>
    </main>
  );
}

export default App;
