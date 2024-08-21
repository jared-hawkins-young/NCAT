import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What is NC A&T's mascot?",
    "Im hungry for mexican food on campus where should I go?",
    "How can I apply for the Desk Assistant position?"
];

const GPT4V_EXAMPLES: string[] = [
    "What is NC A&T's mascot?",
    "Im hungry for mexican food on campus where should I go?",
    "How can I apply for the Desk Assistant position?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
