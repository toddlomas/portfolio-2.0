import { Experience } from "typings";

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, { next: { revalidate: 60 } });

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
}