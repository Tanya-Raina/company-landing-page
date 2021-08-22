import './App.css';
import TopSection from './components/TopSection';
import CardSection from './components/CardSection';
import LineBreak from './components/LineBreak';
import VideoSection from './components/VideoSection';
import CaseStudy from './components/CaseStudy';
import CallToAction from './components/CallToAction';
import StatisticsSection from './components/StatisticsSection';

function App() {
  return (
    <div className="App">
      <TopSection />
      <CardSection />
      <LineBreak length={"5%"} />
      <VideoSection />
      <StatisticsSection />
      <CallToAction />
      <CaseStudy />
    </div>
  );
}

export default App;
