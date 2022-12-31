import { Link } from 'react-router-dom';
import AddThreadInput from '../components/AddThreadInput';

function AddThreadPage() {
  return (
    <section className="add-thread-page">
      <article className="flex flex-col">
        <h1 className="font-semibold text-xl text">Buat Thread </h1>
        <div className="rounded-md p-10 bg-white md:w-[600px] sm:w-full mt-4">
          <AddThreadInput />
        </div>
      </article>
    </section>
  );
}

export default AddThreadPage;
