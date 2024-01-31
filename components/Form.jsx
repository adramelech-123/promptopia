import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSumbit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-Powered platform.
      </p>

      <form
        onSubmit={handleSumbit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {' '}
            <span className="font-normal text-sm text-gray-500">#product, #webdevelopment, #idea</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={'/'} className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:from-orange-400 hover:to-red-600"
          >
            {submitting ? `${type}...` : type}
          
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
