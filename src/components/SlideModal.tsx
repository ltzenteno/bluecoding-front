import React from 'react';
import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setSelectedGif, toggleModal } from '../slices/customSlice';

const SlideModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.custom.isModalOpen);
  const selectedItemId = useAppSelector((state) => state.custom.selectedGif);
  const items = useAppSelector((state) => state.custom.gifList);

  const selectedIndex = items.findIndex((it) => it.id === selectedItemId);

  const classes = classNames(
    'modal fade fixed top-[5%] left-[5%] w-3/4 outline-none overflow-x-hidden overflow-y-auto text-black',
    isOpen ? '' : 'hidden'
  );

  const moveSlide = (idx: number) => {
    if (items[idx]) {
      dispatch(setSelectedGif(items[idx].id));
    } else {
      // fuera de limites
      if (idx < selectedIndex) {
        dispatch(setSelectedGif(items[items.length - 1].id));
      } else {
        dispatch(setSelectedGif(items[0].id));
      }
    }
  };

  return (
    <div
      className={classes}
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => dispatch(toggleModal(false))}
            >
              X
            </button>
          </div>
          <div className="modal-body relative p-4">
            {items.length > 0 && items[selectedIndex] && (
              <div className="text-center">
                <p>{items[selectedIndex].id || ''}</p>
                <img
                  alt={items[selectedIndex]?.id || 'placeholder'}
                  src={items[selectedIndex]?.images.downsized.url || ''}
                />
              </div>
            )}
          </div>
          <div className="flex flex-shrink-0 flex-wrap items-center justify-between p-4 border-t border-gray-200 rounded-b-md">
            <button
              onClick={() => moveSlide(selectedIndex - 1)}
              className="button bg-blue-500 text-white py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => moveSlide(selectedIndex + 1)}
              className="button bg-blue-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModal;
