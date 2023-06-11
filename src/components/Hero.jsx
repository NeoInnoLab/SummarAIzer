import { logo } from '../assets/';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' />
        <button
          type='button'
          onClick={() =>
            window.open('https://github.com/NeoInnoLab/SummarAIzer', '_blank')
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-3.5</span>
      </h1>
      <h2 className='desc'>
        Turns your reading into easy-to-digest summaries with SummarAIzer.{' '}
        <br />
        Get the key insights and save time by skipping lengthy reads.
      </h2>
    </header>
  );
};

export default Hero;
