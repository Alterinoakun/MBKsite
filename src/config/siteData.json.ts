export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "MapBisnisKu",
	// Judul dan deskripsi website Anda (meta fields)
	title: "MapBisnisKu - Konsultan & Manajemen Profil Bisnis Google",
	description:
		"Layanan pembuatan website dan landing page profesional, manajemen Profil Bisnis Google, dan lainnya. Tingkatkan bisnis Anda secara online bersama MapBisnisKu.",
	useViewTransitions: true,
	// Informasi bisnis Anda
	author: {
		name: "Tim MapBisnisKu",
		email: "",
		twitter: "",
	},

	// Gambar default untuk meta tag jika halaman belum memiliki gambar
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Logo MapBisnisKu",
	},
};

export default siteData;
