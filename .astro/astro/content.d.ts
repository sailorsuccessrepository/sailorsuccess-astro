declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"careers": {
"anglo-eastern-hiring-guide-2026.md": {
	id: "anglo-eastern-hiring-guide-2026.md";
  slug: "anglo-eastern-hiring-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"bsm-shipping-jobs-guide-2026.md": {
	id: "bsm-shipping-jobs-guide-2026.md";
  slug: "bsm-shipping-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"bulk-carrier-jobs-guide-2026.md": {
	id: "bulk-carrier-jobs-guide-2026.md";
  slug: "bulk-carrier-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"cadet-sponsorship-companies-2026.md": {
	id: "cadet-sponsorship-companies-2026.md";
  slug: "cadet-sponsorship-companies-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"chief-engineer-career-guide-2026.md": {
	id: "chief-engineer-career-guide-2026.md";
  slug: "chief-engineer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"chief-officer-career-guide-2026.md": {
	id: "chief-officer-career-guide-2026.md";
  slug: "chief-officer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"company-sponsorship-guide-2026.md": {
	id: "company-sponsorship-guide-2026.md";
  slug: "company-sponsorship-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"container-ship-jobs-guide-2026.md": {
	id: "container-ship-jobs-guide-2026.md";
  slug: "container-ship-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"cruise-ship-chef-jobs-guide-2026.md": {
	id: "cruise-ship-chef-jobs-guide-2026.md";
  slug: "cruise-ship-chef-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"cruise-ship-jobs-india-2026.md": {
	id: "cruise-ship-jobs-india-2026.md";
  slug: "cruise-ship-jobs-india-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"daily-life-on-ship-guide-2026.md": {
	id: "daily-life-on-ship-guide-2026.md";
  slug: "daily-life-on-ship-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"deck-cadet-training-guide-2026.md": {
	id: "deck-cadet-training-guide-2026.md";
  slug: "deck-cadet-training-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"deck-officer-career-path-2026.md": {
	id: "deck-officer-career-path-2026.md";
  slug: "deck-officer-career-path-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"dg-shipping-approved-institutes-2026.md": {
	id: "dg-shipping-approved-institutes-2026.md";
  slug: "dg-shipping-approved-institutes-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"dns-course-guide-2026.md": {
	id: "dns-course-guide-2026.md";
  slug: "dns-course-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"dns-third-mate-roadmap-2026.md": {
	id: "dns-third-mate-roadmap-2026.md";
  slug: "dns-third-mate-roadmap-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"engine-cadet-training-guide-2026.md": {
	id: "engine-cadet-training-guide-2026.md";
  slug: "engine-cadet-training-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"eto-course-career-guide-2026.md": {
	id: "eto-course-career-guide-2026.md";
  slug: "eto-course-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"eto-course-guide-2026.md": {
	id: "eto-course-guide-2026.md";
  slug: "eto-course-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"fleet-management-hiring-guide-2026.md": {
	id: "fleet-management-hiring-guide-2026.md";
  slug: "fleet-management-hiring-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"fourth-engineer-career-guide-2026.md": {
	id: "fourth-engineer-career-guide-2026.md";
  slug: "fourth-engineer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"gme-vs-dns-comparison.md": {
	id: "gme-vs-dns-comparison.md";
  slug: "gme-vs-dns-comparison";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"gp-rating-course-guide-2026.md": {
	id: "gp-rating-course-guide-2026.md";
  slug: "gp-rating-course-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"gp-rating-officer-roadmap-2026.md": {
	id: "gp-rating-officer-roadmap-2026.md";
  slug: "gp-rating-officer-roadmap-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"how-to-join-merchant-navy-after-12th.md": {
	id: "how-to-join-merchant-navy-after-12th.md";
  slug: "how-to-join-merchant-navy-after-12th";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"lng-ship-officer-careers-guide-2026.md": {
	id: "lng-ship-officer-careers-guide-2026.md";
  slug: "lng-ship-officer-careers-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"maersk-jobs-india-guide-2026.md": {
	id: "maersk-jobs-india-guide-2026.md";
  slug: "maersk-jobs-india-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"marine-engineer-career-path-2026.md": {
	id: "marine-engineer-career-path-2026.md";
  slug: "marine-engineer-career-path-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"master-mariner-captain-guide-2026.md": {
	id: "master-mariner-captain-guide-2026.md";
  slug: "master-mariner-captain-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"merchant-navy-after-10th-2026.md": {
	id: "merchant-navy-after-10th-2026.md";
  slug: "merchant-navy-after-10th-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"merchant-navy-after-engineering-2026.md": {
	id: "merchant-navy-after-engineering-2026.md";
  slug: "merchant-navy-after-engineering-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"merchant-navy-age-limit-guide-2026.md": {
	id: "merchant-navy-age-limit-guide-2026.md";
  slug: "merchant-navy-age-limit-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"merchant-navy-interview-guide-2026.md": {
	id: "merchant-navy-interview-guide-2026.md";
  slug: "merchant-navy-interview-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"merchant-navy-shore-jobs-2026.md": {
	id: "merchant-navy-shore-jobs-2026.md";
  slug: "merchant-navy-shore-jobs-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"msc-shipping-jobs-guide-2026.md": {
	id: "msc-shipping-jobs-guide-2026.md";
  slug: "msc-shipping-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"offshore-merchant-navy-careers-2026.md": {
	id: "offshore-merchant-navy-careers-2026.md";
  slug: "offshore-merchant-navy-careers-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"offshore-vessel-jobs-guide-2026.md": {
	id: "offshore-vessel-jobs-guide-2026.md";
  slug: "offshore-vessel-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"second-engineer-career-guide-2026.md": {
	id: "second-engineer-career-guide-2026.md";
  slug: "second-engineer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"second-officer-career-guide-2026.md": {
	id: "second-officer-career-guide-2026.md";
  slug: "second-officer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"ship-management-companies-hiring-2026.md": {
	id: "ship-management-companies-hiring-2026.md";
  slug: "ship-management-companies-hiring-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"shipping-company-interview-questions-2026.md": {
	id: "shipping-company-interview-questions-2026.md";
  slug: "shipping-company-interview-questions-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"shipping-company-recruitment-process-2026.md": {
	id: "shipping-company-recruitment-process-2026.md";
  slug: "shipping-company-recruitment-process-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"synergy-marine-jobs-guide-2026.md": {
	id: "synergy-marine-jobs-guide-2026.md";
  slug: "synergy-marine-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"tanker-ship-careers-2026.md": {
	id: "tanker-ship-careers-2026.md";
  slug: "tanker-ship-careers-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"tanker-ship-jobs-guide-2026.md": {
	id: "tanker-ship-jobs-guide-2026.md";
  slug: "tanker-ship-jobs-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"third-engineer-career-guide-2026.md": {
	id: "third-engineer-career-guide-2026.md";
  slug: "third-engineer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"third-officer-career-guide-2026.md": {
	id: "third-officer-career-guide-2026.md";
  slug: "third-officer-career-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"tme-course-complete-guide-2026.md": {
	id: "tme-course-complete-guide-2026.md";
  slug: "tme-course-complete-guide-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"tme-fourth-engineer-roadmap-2026.md": {
	id: "tme-fourth-engineer-roadmap-2026.md";
  slug: "tme-fourth-engineer-roadmap-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"top-shipping-companies-india-2026.md": {
	id: "top-shipping-companies-india-2026.md";
  slug: "top-shipping-companies-india-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
"women-merchant-navy-india-2026.md": {
	id: "women-merchant-navy-india-2026.md";
  slug: "women-merchant-navy-india-2026";
  body: string;
  collection: "careers";
  data: InferEntrySchema<"careers">
} & { render(): Render[".md"] };
};
"learn": {
"bwms-convention-guide-2026.md": {
	id: "bwms-convention-guide-2026.md";
  slug: "bwms-convention-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"certificate-of-competency-guide-2026.md": {
	id: "certificate-of-competency-guide-2026.md";
  slug: "certificate-of-competency-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"chemistry-imu-cet-preparation-2026.md": {
	id: "chemistry-imu-cet-preparation-2026.md";
  slug: "chemistry-imu-cet-preparation-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"dg-shipping-exams-guide-2026.md": {
	id: "dg-shipping-exams-guide-2026.md";
  slug: "dg-shipping-exams-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"dns-course-complete-guide-2026.md": {
	id: "dns-course-complete-guide-2026.md";
  slug: "dns-course-complete-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"english-imu-cet-preparation-2026.md": {
	id: "english-imu-cet-preparation-2026.md";
  slug: "english-imu-cet-preparation-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"general-knowledge-imu-cet-2026.md": {
	id: "general-knowledge-imu-cet-2026.md";
  slug: "general-knowledge-imu-cet-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"gme-course-guide-2026.md": {
	id: "gme-course-guide-2026.md";
  slug: "gme-course-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"ielts-seafarers-guide-2026.md": {
	id: "ielts-seafarers-guide-2026.md";
  slug: "ielts-seafarers-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"imu-cet-exam-guide-2026.md": {
	id: "imu-cet-exam-guide-2026.md";
  slug: "imu-cet-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"imu-cet-preparation-guide-2026.md": {
	id: "imu-cet-preparation-guide-2026.md";
  slug: "imu-cet-preparation-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"interview-preparation-seafarer-2026.md": {
	id: "interview-preparation-seafarer-2026.md";
  slug: "interview-preparation-seafarer-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"master-fg-exam-guide-2026.md": {
	id: "master-fg-exam-guide-2026.md";
  slug: "master-fg-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"mate-fg-exam-guide-2026.md": {
	id: "mate-fg-exam-guide-2026.md";
  slug: "mate-fg-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"mathematics-imu-cet-preparation-2026.md": {
	id: "mathematics-imu-cet-preparation-2026.md";
  slug: "mathematics-imu-cet-preparation-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"meo-class-1-exam-guide-2026.md": {
	id: "meo-class-1-exam-guide-2026.md";
  slug: "meo-class-1-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"meo-class-2-exam-guide-2026.md": {
	id: "meo-class-2-exam-guide-2026.md";
  slug: "meo-class-2-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"meo-class-4-exam-guide-2026.md": {
	id: "meo-class-4-exam-guide-2026.md";
  slug: "meo-class-4-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"meo-class-4-oral-exam-guide-2026.md": {
	id: "meo-class-4-oral-exam-guide-2026.md";
  slug: "meo-class-4-oral-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"merchant-navy-english-communication-guide-2026.md": {
	id: "merchant-navy-english-communication-guide-2026.md";
  slug: "merchant-navy-english-communication-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"merchant-navy-fitness-requirements-2026.md": {
	id: "merchant-navy-fitness-requirements-2026.md";
  slug: "merchant-navy-fitness-requirements-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"physics-imu-cet-preparation-2026.md": {
	id: "physics-imu-cet-preparation-2026.md";
  slug: "physics-imu-cet-preparation-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"second-mate-to-chief-mate-oral-exam-guide-2026.md": {
	id: "second-mate-to-chief-mate-oral-exam-guide-2026.md";
  slug: "second-mate-to-chief-mate-oral-exam-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"ship-familiarization-guide-2026.md": {
	id: "ship-familiarization-guide-2026.md";
  slug: "ship-familiarization-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"shipboard-safety-training-guide-2026.md": {
	id: "shipboard-safety-training-guide-2026.md";
  slug: "shipboard-safety-training-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"sire-inspection-guide-2026.md": {
	id: "sire-inspection-guide-2026.md";
  slug: "sire-inspection-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"stcw-certificates-guide-2026.md": {
	id: "stcw-certificates-guide-2026.md";
  slug: "stcw-certificates-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"stcw-courses-complete-guide-2026.md": {
	id: "stcw-courses-complete-guide-2026.md";
  slug: "stcw-courses-complete-guide-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
"types-of-ships-merchant-navy-2026.md": {
	id: "types-of-ships-merchant-navy-2026.md";
  slug: "types-of-ships-merchant-navy-2026";
  body: string;
  collection: "learn";
  data: InferEntrySchema<"learn">
} & { render(): Render[".md"] };
};
"money": {
"banking-seafarers-guide-2026.md": {
	id: "banking-seafarers-guide-2026.md";
  slug: "banking-seafarers-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"forex-remittance-guide-seafarers-2026.md": {
	id: "forex-remittance-guide-seafarers-2026.md";
  slug: "forex-remittance-guide-seafarers-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"gp-rating-salary-guide-2026.md": {
	id: "gp-rating-salary-guide-2026.md";
  slug: "gp-rating-salary-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"income-tax-seafarers-guide-2026.md": {
	id: "income-tax-seafarers-guide-2026.md";
  slug: "income-tax-seafarers-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"investment-guide-seafarers-2026.md": {
	id: "investment-guide-seafarers-2026.md";
  slug: "investment-guide-seafarers-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"loans-for-seafarers-guide-2026.md": {
	id: "loans-for-seafarers-guide-2026.md";
  slug: "loans-for-seafarers-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"merchant-navy-salary-guide-2026.md": {
	id: "merchant-navy-salary-guide-2026.md";
  slug: "merchant-navy-salary-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"merchant-navy-salary-india-2026.md": {
	id: "merchant-navy-salary-india-2026.md";
  slug: "merchant-navy-salary-india-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"nri-investment-guide-seafarers-2026.md": {
	id: "nri-investment-guide-seafarers-2026.md";
  slug: "nri-investment-guide-seafarers-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"nri-status-seafarers-guide-2026.md": {
	id: "nri-status-seafarers-guide-2026.md";
  slug: "nri-status-seafarers-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"retirement-planning-seafarers-2026.md": {
	id: "retirement-planning-seafarers-2026.md";
  slug: "retirement-planning-seafarers-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"seafarer-allowances-benefits-2026.md": {
	id: "seafarer-allowances-benefits-2026.md";
  slug: "seafarer-allowances-benefits-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"seafarer-credit-card-guide-2026.md": {
	id: "seafarer-credit-card-guide-2026.md";
  slug: "seafarer-credit-card-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"seafarer-health-insurance-guide-2026.md": {
	id: "seafarer-health-insurance-guide-2026.md";
  slug: "seafarer-health-insurance-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"seafarer-provident-fund-guide-2026.md": {
	id: "seafarer-provident-fund-guide-2026.md";
  slug: "seafarer-provident-fund-guide-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"seafarer-tax-guide-india-2026.md": {
	id: "seafarer-tax-guide-india-2026.md";
  slug: "seafarer-tax-guide-india-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
"tax-planning-indian-seafarers-2026.md": {
	id: "tax-planning-indian-seafarers-2026.md";
  slug: "tax-planning-indian-seafarers-2026";
  body: string;
  collection: "money";
  data: InferEntrySchema<"money">
} & { render(): Render[".md"] };
};
"rights": {
"maritime-law-basics-2026.md": {
	id: "maritime-law-basics-2026.md";
  slug: "maritime-law-basics-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"medical-repatriation-guide-2026.md": {
	id: "medical-repatriation-guide-2026.md";
  slug: "medical-repatriation-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"mental-health-seafarers-guide-2026.md": {
	id: "mental-health-seafarers-guide-2026.md";
  slug: "mental-health-seafarers-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"mlc-2006-seafarer-rights-guide.md": {
	id: "mlc-2006-seafarer-rights-guide.md";
  slug: "mlc-2006-seafarer-rights-guide";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"piracy-safety-guide-seafarers-2026.md": {
	id: "piracy-safety-guide-seafarers-2026.md";
  slug: "piracy-safety-guide-seafarers-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"repatriation-rights-guide-2026.md": {
	id: "repatriation-rights-guide-2026.md";
  slug: "repatriation-rights-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"seafarer-contract-guide-2026.md": {
	id: "seafarer-contract-guide-2026.md";
  slug: "seafarer-contract-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"seafarer-mental-health-guide-2026.md": {
	id: "seafarer-mental-health-guide-2026.md";
  slug: "seafarer-mental-health-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"seafarer-wage-claims-guide-2026.md": {
	id: "seafarer-wage-claims-guide-2026.md";
  slug: "seafarer-wage-claims-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
"seafarer-work-hours-rest-guide-2026.md": {
	id: "seafarer-work-hours-rest-guide-2026.md";
  slug: "seafarer-work-hours-rest-guide-2026";
  body: string;
  collection: "rights";
  data: InferEntrySchema<"rights">
} & { render(): Render[".md"] };
};
"tools": {
"cdc-application-guide-2026.md": {
	id: "cdc-application-guide-2026.md";
  slug: "cdc-application-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"cdc-online-apply-guide-2026.md": {
	id: "cdc-online-apply-guide-2026.md";
  slug: "cdc-online-apply-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"indos-number-apply-guide-2026.md": {
	id: "indos-number-apply-guide-2026.md";
  slug: "indos-number-apply-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"indos-registration-guide-2026.md": {
	id: "indos-registration-guide-2026.md";
  slug: "indos-registration-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"merchant-navy-medical-test-2026.md": {
	id: "merchant-navy-medical-test-2026.md";
  slug: "merchant-navy-medical-test-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"passport-ecr-seafarer-guide-2026.md": {
	id: "passport-ecr-seafarer-guide-2026.md";
  slug: "passport-ecr-seafarer-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"passport-seafarers-guide-2026.md": {
	id: "passport-seafarers-guide-2026.md";
  slug: "passport-seafarers-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"peme-examination-guide-2026.md": {
	id: "peme-examination-guide-2026.md";
  slug: "peme-examination-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"physical-fitness-requirements-2026.md": {
	id: "physical-fitness-requirements-2026.md";
  slug: "physical-fitness-requirements-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"pre-sea-medical-test-guide-2026.md": {
	id: "pre-sea-medical-test-guide-2026.md";
  slug: "pre-sea-medical-test-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"pre-sea-training-documents-checklist-2026.md": {
	id: "pre-sea-training-documents-checklist-2026.md";
  slug: "pre-sea-training-documents-checklist-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"rpsl-verification-guide-2026.md": {
	id: "rpsl-verification-guide-2026.md";
  slug: "rpsl-verification-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"yellow-fever-vaccination-guide-2026.md": {
	id: "yellow-fever-vaccination-guide-2026.md";
  slug: "yellow-fever-vaccination-guide-2026";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
