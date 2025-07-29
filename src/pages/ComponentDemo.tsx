import Chips from "../components/Chips";
import NavBar from "../components/NavBar";
import Buttons from "../components/Buttons";
import TextFields from "../components/TextFields";
import Cards from "../components/Cards";
import Alerts from "../components/Alerts";
import FormControls from "../components/FormControls";
import SlidersAndProgresses from "../components/SlidersAndProgresses";
import Ratings from "../components/Ratings";
import Avatars from "../components/Avatars";
import ButtonGroupsAndToggles from "../components/ButtonGroupsAndToggles";
import Dividers from "../components/Dividers";
import FloatingActionButtons from "../components/FloatingActionButtons";
import Footers from "../components/Footers";

export default function ComponentDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Material UI App Bar */}
      <NavBar />

      {/* Buttons */}
      <Buttons />

      {/* Text Fields */}
      <TextFields />

      {/* Chips */}
      <Chips />

      {/* Cards */}
      <Cards />

      {/* Alerts */}
      <Alerts />

      {/* Form Controls */}
      <FormControls />

      {/* Slider & Progress */}
      <SlidersAndProgresses />

      {/* Rating */}
      <Ratings />

      {/* Avatar */}
      <Avatars />

      {/* Button Group & Toggle */}
      <ButtonGroupsAndToggles />

      {/* Divider */}
      <Dividers />

      {/* Floating Action Button */}
      <FloatingActionButtons />

      {/* Footer */}
      <Footers />
    </div>
  );
}
