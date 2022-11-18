import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },
    OTHER: {
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem',
        },
    },
};

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button 
                        className="bg-zinc-800 py-5 w-24 flex-col flex-1 m-0 items-center rounded-lg gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500"
                        // onClick={}
                        type="button" >

                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                }) } 
            </div>

            <footer className="text-xs text-neutral-400">
            Feito por <a className="underline underline-offset-2" href="https://github.com/marllonmendez">Mendez</a>
            </footer>
        </div>
    );
}