const cards = ref([
    {
        image: "/bfly.png",
        title: "Butterflies",
        desc: "Nature's delicate marvels. With vibrant colors and graceful flights, these winged beauties inspire awe and wonder",
    },
    {
        image: "/bees.jpg",
        title: "Bees",
        desc: "Nature's diligent pollinators. With intricate hives and vital roles, these industrious insects are essential for our ecosystems",
    },
    {
        image: "/beetles.png",
        title: "Beetles",
        desc: "Meet the humble yet mighty beetle: nature's tiny engineers. these fascinating creatures captivate with their diversity and ecological importance.",
    },
]);

const states = ref({
    title: "IMPACT",
    content:
        "Wings of Nature is a collaborative project between Precision Medicine Lab and Code For Pakistan, dedicated to the little flying wonders in our environment like bees, beetles, and butterflies. These vital creatures are often overlooked, threatened, and on the brink of extinction due to human activities. Their existence profoundly impacts our ecosystems, food supply, and daily lives. Join us in raising awareness and protecting these essential wings of nature.",
    statistics: [
        { label: "Contributors", value: 15 },
        { label: "Team Members", value: 10 },
        { label: "Pictures", value: 200 },
    ],
    linkText: "More about us",
    linkUrl: "/about",
});

const critterProcs = ref({
    title: "Send Us Insects/Critters",
    method: "",
    methods: [
        {
            src: "/catch2.png",
            title: "FIND THEM",
            description: "Locate bees, beetles, and butterflies in their natural habitats.",
        },
        {
            src: "/preserve3.png",
            title: "PRESERVE THEM",
            description: "Carefully preserve the insects following our guidelines.",
        },
        {
            src: "/send1.png",
            title: "SEND THEM",
            description: "Mail the preserved specimen.",
        },
    ],
});

const imageProcs = ref({
    title: "Contribute Pictures",
    method: "",
    methods: [
        {
            src: "/snap1.png",
            title: "TAKE A PICTURE",
            description: "Capture high-quality images of bees, beetles, and butterflies.",
        },
        {
            src: "/form1.png",
            title: "FILL AND SUBMIT",
            description: "Complete our online form and upload your photos.",
        },
        {
            src: "/web1.png",
            title: "BECOME A CONTRIBUTER",
            description: "Join our community of contributors.",
        },
    ],
});

const footer = ref({
    logo: "/logo.png",
    oneliner:
        "Wings of Nature is a biodiversity collaboration project between Precision Medicine Lab and Code for Pakistan.",
    background: "/poza.png",
});
const about = ref({
    cfp: {
        name: "CODE FOR PAKISTAN",
        about: "Code for Pakistan is a civic innovation non-profit made up of a passionate community of technologists and talented professionals, driven by a strong belief in civic innovation and social impact that can move Pakistan forward in measurable and meaningful ways.",
    },
    pml: {
        name: " PERCISION  MEDICINE LAB",
        about: "The Precision Medicine Lab is a cross-disciplinary laboratory that allows data analysts and deep learning experts to work very closely with biologists, geneticists and clinicians to leverage the power of genome-scale datasets, big data from the hospital and machine learning to improve cancer patient outcomes.",
    },

    won: {
        name: "WINGS OF NATURE",
        about: "Wings of Nature is a collaborative initiative between Precision Medicine Lab and Code For Pakistan, dedicated to celebrating and safeguarding the small yet mighty flying insects in our environment. From bees to beetles to butterflies, these incredible creatures are often overlooked and endangered due to human activity. Their roles are crucial as they pollinate our plants, sustain our ecosystems, and influence our food supply and everyday lives. Our project aims to raise awareness, foster community involvement, and promote conservation efforts to protect these essential wings of nature. Join us in our mission to appreciate and preserve the intricate beauty and ecological significance of these vital insects.",
    },
    team: [
        { image: "/person.png", name: "Dr Faisal", title: "Principal investigator PML" },
        { image: "/ali.jpeg", name: "Ali Raza", title: "Director Technology CFP" },
        { image: "/mubassir.jpg", name: "Mubassir Hayat", title: "Technology Manager CFP" },
        { image: "/person.png", name: "Farooq Islam", title: "Technology Lead CFP" },
        { image: "/person.png", name: "Asim", title: "lorem Lorem" },
    ],
});
export default function useStaticData() {
    return {
        states,
        critterProcs,
        footer,
        cards,
        imageProcs,
        about,
    };
}
