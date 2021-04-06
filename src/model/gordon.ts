// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default {
	patient: {
		firstName: {
			type: 'text',
			value: '',
			persian: 'نام',
			require: true,
		},
		lastName: {
			type: 'text',
			value: '',
			persian: 'نام خانوادگي',
			require: true,
		},
		recordNumber: {
			type: 'text',
			value: '',
			persian: 'شماره پرونده',
			require: true,
		},
		ward: {
			type: 'text',
			value: '',
			persian: 'بخش',
			require: true,
		},
		room: {
			type: 'اتاق',
			value: '',
			persian: '',
			require: true,
		},
		bed: {
			type: 'تخت',
			value: '',
			persian: '',
			require: true,
		},
		fatherName: {
			type: 'text',
			value: '',
			persian: 'نام پدر',
		},
		dateOfBirth: {
			type: 'date',
			value: new Date(),
			persian: 'تاريخ تولد',
		},
		physicianName: {
			type: 'text',
			value: '',
			persian: 'پزشک معالج',
			require: true,
		},
		admissionDate: {
			type: 'date',
			value: new Date(),
			persian: 'تاريخ پذيرش',
			require: true,
		},
		maritalStatus: {
			type: 'option',
			value: false,
			options: [
				{ name: 'دارد', item: true },
				{ name: 'ندارد', item: false },
			],
			persian: 'وضعیت تأهل',
		},
		hospitalizationReason: {
			type: 'text',
			value: '',
			persian: 'دليل بستري',

			require: true,
		},
		chiefComplaint: {
			type: 'text',
			value: '',
			persian: 'شکایت اصلی',
		},
		hospitalizationHistory: {
			type: 'option',
			value: false,
			options: [
				{ name: 'دارد', item: true },
				{ name: 'ندارد', item: false },
			],
			persian: 'سابقه بستري',
		},
		prostheses: {
			type: 'option',
			value: false,
			options: [
				{ name: 'دارد', item: true },
				{ name: 'ندارد', item: false },
			],
			persian: 'اعضاي مصنوعي',
		},
		Occupation: {
			type: 'text',
			value: '',
			persian: 'شغل',
		},

		entryFrom: {
			type: 'suggest',
			value: '',
			options: [
				{ item: 'با پاي خود', name: 'با پاي خود' },
				{ item: 'صندلي چرخدار', name: 'صندلي چرخدار' },
				{ item: 'برانکارد', name: 'برانکارد' },
			],
			persian: 'نحوه ورود',
			require: true,
		},
		admittedForm: {
			type: 'suggest',
			value: '',
			options: [
				{ item: 'بصورت الکتيو', name: 'بصورت الکتيو' },
				{ item: 'از طریق اورژانس', name: 'از طریق اورژانس' },
				{ item: 'انتقال بین بخشی', name: 'انتقال بین بخشی' },
			],
			persian: 'نحوه ی بستري',
		},
		patientCaregiver: {
			type: 'suggest',
			value: '',
			options: [
				{ item: 0, name: 'خانواده' },
				{ item: 1, name: 'دوستان' },
				{ item: 2, name: ' بدون همراه' },
			],
			persian: 'همراهان بيمار',
		},
		informationSource: {
			type: 'suggest',
			value: '',
			options: [
				{ item: 'بيمار', name: 'بيمار' },
				{ item: 'خانواده', name: 'خانواده' },
			],
			persian: 'منبع اطلاعات',
		},
		language: {
			type: 'suggest',
			value: '',
			options: [
				{ item: 'ترکي آذري', name: 'ترکي آذري' },
				{ item: 'فارسي', name: 'فارسي' },
			],
			persian: 'زبان مادري',
		},
	},
	gordon: [
		{
			name: 'health-promotion',
			persianName: 'ارتقا سلامت',
			route: '/patient/gordon/health-promotion',
			inputs: {
				diseasesHistory: {
					type: 'text',
					value: '',
					persian: 'سابقه بيماريهاي زمينه اي / جراحی',
				},
				drugHistory: {
					type: 'suggest',
					value: '',
					options: [
						{ item: 0, name: 'ندارد' },
						{ item: 1, name: 'بنزودیازپین' },
						{ item: 2, name: 'استامینوفن' },
					],
					persian: 'سابقه مصرف دارو',
				},
				allergies: {
					type: 'suggest',
					value: '',
					options: [{ item: 0, name: 'ندارد' }],
					persian: 'حساسیت غذایی/ دارویی/ لاتکس یا مواد حاجب',
				},
				dailyExercise: {
					type: 'option',
					value: false,
					options: [
						{ name: 'دارد', item: true },
						{ name: 'ندارد', item: false },
					],
					persian: 'آیا بیمار عادات به ورزش منظم روزانه دارد؟',
				},
				redactionalActivity: {
					type: 'option',
					value: false,
					options: [
						{ name: 'دارد', item: true },
						{ name: 'ندارد', item: false },
					],
					persian: 'آیا در فعالیت های تفریحی مشارکت دارد؟',
				},
				stressInDailyLife: {
					type: 'option',
					value: false,
					options: [
						{ name: 'دارد', item: true },
						{ name: 'ندارد', item: false },
					],
					persian: 'آیا قادر به مدیریت استرس در زندگی روزمره می باشد؟',
				},
				dietRegime: {
					type: 'option',
					value: false,
					options: [
						{ name: 'دارد', item: true },
						{ name: 'ندارد', item: false },
					],
					persian: 'آیا بیمار از رژیم  غذایی تجویز شده تبعیت دارد؟',
				},
				medicalRegime: {
					type: 'option',
					value: false,
					options: [
						{ name: 'دارد', item: true },
						{ name: 'ندارد', item: false },
					],
					persian: 'آیا بیمار از رژیم دارویی تجویز شده تبعیت دارد؟ ',
				},
				drugs: {
					type: 'option',
					value: false,
					options: [
						{ name: 'دارد', item: true },
						{ name: 'ندارد', item: false },
					],
					persian: 'آیا دخانیات / الکل/ قلیان / مواد مخدر مصرف می کند؟',
				},
				amountOfDailyUse: {
					type: 'text',
					value: '',
					persian: 'نوع و میزان مصرف روزانه',
				},
				riskFactorProgression: {
					type: 'option',
					value: false,
					options: [
						{ name: 'کاملا', item: 'کاملا' },
						{ name: 'تا حدودی', item: 'تا حدودی' },
						{ name: 'اصلاً', item: 'اصلاً' },
					],
					persian:
						'آیا از نقش عوامل خطر قلبی عروقی در پیشرفت بیماری مطلع می باشد؟ ',
				},
			},
		},
		{
			name: 'nutrition',
			persianName: 'تغذیه',
			route: '/patient/gordon/nutrition',
			inputs: {
				NPO: {
					type: 'suggest',
					value: '',
					options: [
						{ item: 'مایعات', name: 'مایعات' },
						{ item: 'معمولی', name: 'معمولی' },
						{ item: 'کم نمک و کم چربی ', name: 'کم نمک و کم چربی ' },
						{ item: 'دیابتیک', name: 'دیابتیک' },
					],
					persian: 'نوع رژیم غذایی',
				},
				difficultyInChewing: {
					type: 'suggest',
					value: '',
					options: [
						{ item: 'دارد', name: 'دارد' },
						{ item: 'ندارد', name: 'ندارد' },
					],
					persian: 'مشکل در بلع / جویدن',
				},
				mouthCondition: {
					type: 'option',
					value: 'سوءهاضمه',
					options: [
						{ name: 'ملتهب / دارای زخم', item: 'ملتهب / دارای زخم' },
						{ name: 'مشکل در التیام زخم', item: 'مشکل در التیام زخم' },
						{ name: 'سوءهاضمه', item: 'سوءهاضمه' },
					],
					persian: 'وضعیت دهان',
				},
				examinationGums: {
					type: 'option',
					value: 'کامل',
					options: [
						{ name: 'دندان مصنوعی', item: ' دندان مصنوعی' },
						{ name: 'نسبی', item: 'نسبی' },
						{ name: 'کامل', item: 'کامل' },
					],
					persian: 'بررسی دندان/ لثه ها',
				},
				appetitePattern: {
					type: 'option',
					value: 'نرمال',
					options: [
						{ name: 'بی اشتهایی', item: 'بی اشتهایی' },
						{ name: 'نرمال', item: 'نرمال' },
					],
					persian: 'الگوی اشتها',
				},
				skinTurgor: {
					type: 'option',
					value: 'طبیعی',
					options: [
						{ name: 'ضعیف', item: 'ضعیف' },
						{ name: 'طبیعی', item: 'طبیعی' },
					],
					persian: 'تورگور پوستی',
				},
				vomiting: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'استفراغ',
				},
				qualityOfVomiting: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'جهنده', item: 'جهنده' },
						{ name: 'صفراوی', item: 'صفراوی' },
						{ name: 'خونی', item: 'خونی' },
						{ name: 'حاوی غذای صرف شده ', item: ' حاوی غذای صرف شده ' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'کیفیت استفراغ',
				},
				height: {
					type: 'text',
					value: '',
					persian: 'قد',
				},
				weight: {
					type: 'text',
					value: '',
					persian: 'وزن',
				},
				BMI: {
					type: 'text',
					value: '',
					persian: 'شاخص توده بدنی',
				},
				looseWeightInPastThreeMonth: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا طی 3 ماه اخیر کاهش وزن دارد؟',
				},
				decreasedFoodIntake: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian:
						'آیا طی هفته گذشته بیاشتهایی یاکاهش مصرف غذا به هر دلیل (مانند تهوع و استفراغ شدید) داشته است؟ ',
				},
				needSpecialCare: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
			},
		},
		{
			name: 'eliminationAndExchange',
			persianName: 'دفع / تبادلات',
			route: '/patient/gordon/nutrition',
			inputs: {
				defecationPattern: {
					type: 'suggest',
					value: 'نرمال',
					options: [
						{ item: 'نرمال', name: 'نرمال' },
						{ item: 'بی‌اختیاری مدفوع', name: 'بی‌اختیاری مدفوع' },
						{ item: ' یبوست', name: ' یبوست' },
						{ item: 'اسهال', name: 'اسهال' },
						{ item: 'ملنا', name: 'ملنا' },
						{ item: 'استفاده از مسهل ها', name: 'استفاده از مسهل ها' },
					],
					persian: 'الگوی دفع مدفوع',
				},
				abdominal: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
				bowelSounds: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
				palpation: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
				percussion: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
				urinaryPattern: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
				typeOfIncontinence: {
					type: 'option',
					value: 'دارد',
					options: [
						{ name: 'دارد', item: 'دارد' },
						{ name: 'ندارد', item: 'ندارد' },
					],
					persian: 'آیا وضعیت کلی بیمار وخیم و نیازمند مراقبت ویژه است؟',
				},
			},
		},
	],
};
