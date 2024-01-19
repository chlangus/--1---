import { useState } from 'react';
import ModalWindow from '../components/ModalWindow/ModalWindow';

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <ModalWindow isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

// import logo from '../assets/logo.svg';

// export default function MainPage() {
//   return (
//     <div>
//       <img src={logo} alt="logo-imgage" />
//       this is main page
//     </div>
//   );
// }
