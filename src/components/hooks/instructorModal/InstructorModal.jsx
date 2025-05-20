import { useState } from "react";

// Custom Hook: useComeAInstructorModal
// This hook manages the state and UI for a "Become an Instructor" modal.
const useComeAInstructorModal = () => {
  // State to control modal visibility
  const [isOpen, setIsOpenModal] = useState(false);
  // State to store the degree input by the user
  const [degree, setDegree] = useState("");

  // Function to open the modal
  const openModal = () => setIsOpenModal(true);

  // Function to close the modal and reset degree input
  const closeModal = () => {
    setIsOpenModal(false);
    setDegree("");
  };

  // Function to handle form submission
  const handleContinue = () => {
    const instructorData = {
      name: 'Mujahidul Islam Rifat', // Hardcoded name (you may later replace it with dynamic user data)
      email: 'mirifat4541@gmail.com', // Hardcoded email
      degree,
    };
    console.log("Instructor Data Submitted", instructorData);
    // TODO: Send instructorData to the database (API call)
    closeModal();
  };

  // JSX for the modal component
  const InstructorModal = (
    <div>
      {/* Modal toggle - controlled via checked={isOpen} */}
      <input
        type="checkbox"
        className="modal-toggle "
        checked={isOpen}
        readOnly
      />
      <div className="modal ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Become an Instructor</h3>
          <form>
            {/* Disabled input showing user's name */}
            <input
              type="text"
              defaultValue={'Mujahidul Islam Rifat'}
              disabled
              className="input input-bordered w-full my-2"
            />
            {/* Disabled input showing user's email */}
            <input
              type="email"
              defaultValue={'mirifat4541@gmail.com'}
              disabled
              className="input input-bordered w-full my-2"
            />
            {/* Input for user's degree */}
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Your Degree"
              className="input input-bordered w-full my-2"
              required
            />
          </form>
          <div className="modal-action">
            {/* Close button */}
            <button onClick={closeModal} className="btn">
              Close
            </button>
            {/* Continue button to submit data */}
            <button onClick={handleContinue} className="btn btn-primary">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Return openModal function and modal JSX so it can be used in other components
  return { openModal, InstructorModal };
};

export default useComeAInstructorModal;
