# VODO-REACT-COMPONENTS

Npm package created to supply reusable components to VODO developers.

## How to use it ?

Before installing package, you should have tailwindCSS installed and configured in your project as the package styling is built using tailwindCSS.

You should also include the index.css file of the package in the top of your app ( eg. in the top of App.tsx - your main file that contains the whole application - ) as following :

```javascript
import React from "react";

// The following import must be included to apply styles used
// in the package
import "../node_modules/vodo-react-components/dist/index.css";

// This is an example for importing some components from package
import { Submit, UserNav } from "vodo-react-components";

function App() {
  return (
    <div className="container">
      <UserNav
        name="Zain Ali"
        avatarUrl="https://i.pravatar.cc/150?img=3"
        className="p-1.5 rounded-full shadow-[#EB3D34_7px_-3px]"
        avatarClass=" w-8 h-8"
        email="zain20@gmail.com"
      />
    </div>
  );
}
```

## Table of components

<hr />
<ul id="table-contents">
      <li><a href="#user-content-UserNav">UserNav</a></li>
      <li><a href="#user-content-Button">Button</a></li>
      <li><a href="#user-content-CardWrapper">CardWrapper</a></li>
      <li><a href="#user-content-businessCard">businessCard</a></li>
      <li><a href="#user-content-Switcher">Switcher</a></li>
      <li><a href="#user-content-InputFile">InputFile</a></li>
      <li><a href="#user-content-SideBar">SideBar</a></li>
      <li><a href="#user-content-UserInput">UserInput</a></li>
      <li><a href="#user-content-Status">Status</a></li>
      <li><a href="#user-content-NavigationTrail">NavigationTrail</a></li>
      <li><a href="#user-content-UserProfile">UserProfile</a></li>
      <li><a href="#user-content-SearchInput">SearchInput</a></li>
      <li><a href="#user-content-TextArea">TextArea</a></li>
      <li><a href="#user-content-Icons">Icons</a></li>
      <li><a href="#user-content-table">table</a></li>
      <li><a href="#user-content-dropDown">dropDown</a></li>
      <li><a href="#user-content-pagination">pagination</a></li>
</ul>
<hr />

## 🛠 Components included in the package :

<section id="UserNav">

### 1- UserNav

#### The userNav takes 5 props:

- name : username
- avatarUrl : url of avatar
- className : TailwindCSS styles you want to add to the whole component.
- avatarClass : TailwindCSS classes you want to apply to avatar
- email : user's email

```javascript
<UserNav
  name="Zain Ali"
  avatarUrl="https://i.pravatar.cc/150?img=3"
  className="p-1.5 rounded-full shadow-[#EB3D34_7px_-3px]"
  avatarClass=" w-8 h-8"
  email="zain20@gmail.com"
/>
```

This usernav acts as a like-popup card that appears when you press on a container with the username and the avatar.
The card that appears contains : section containing username,avatar and user's email and two buttons which are edit account and logout.

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719610722/VODO/reusable%20components/userNav_kzm4rv.png)

//=================================================

//=================================================

</section>

<section id="Button">

### 2- Button

#### The Button takes 5 props :

- Variant : each variant apply styles. Downwards you will find different varaints values with corresponding styles.
- classname ?: TailwindCSS classes to apply
- size ?: each size has corresponding style will be illustrated downwards.
- props ?: additional button props (eg. onClick, onBlur, ...)
- ref ?: to add refrence to the button

```javascript
    <Button variant="destructive">destructive</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="outline">outline</Button>
    <Button variant="link">link</Button>
```

#### Diffrent variants and sizes available :

```javascript
    variant: {
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus:bg-[#C4332B] active:bg-[#C4332B] active:shadow-custom",
        outline:
          "border border-destructive text-destructive bg-background shadow-sm hover:bg-destructive/[0.05] hover:text-destructive focus:bg-destructive/[0.05] active:bg-destructive/[0.15] active:shadow-custom",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-muted-foreground/50 underline-offset-4 hover:underline hover:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
```

\*\*\*\* HINT : The primary button is depricated

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719662187/VODO/reusable%20components/Button_zxnrni.png)

//=================================================

//=================================================

</section>

<section id="CardWrapper">

### 3- CardWrapper

#### The CardWrapper takes 4 props :

- cardTitle : Title appears on the top of the card
- classname ?: TailwindCSS classes to apply
- showFooter ?: boolean value to show footer if true
- footerHref ?: Link appears in the footer ( The footer has a - view all - word which refs to a link )

```javascript
<CardWrapper
  className="w-[500px]"
  showFooter
  footerHref="#"
  cardTitle="Add business"
>
  Card Content
</CardWrapper>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719662839/VODO/reusable%20components/CardWrapper_kwus0q.png)

//=================================================

//=================================================

</section>

<section id="businessCard">

### 4- businessCard

#### The businessCard takes 4 props :

- title
- description
- imageUrl
- addHref : link added to the - add - keyword

```javascript
<BusinessCard
  addHref="#"
  imageUrl={businessCard}
  title="Business name"
  description="Quia fugiat magnam sed ut eum voluptas cumque."
/>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719663778/VODO/reusable%20components/businessCard_dykeza.png)

CardWrapper containing business cards :

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719663779/VODO/reusable%20components/cardWrapper_with_business_cards_a4n4qo.png)

//=================================================

//=================================================

</section>

<section id="Switcher">

### 5- Switcher

A drop list with a search bar.

#### The Switcher takes 5 props :

- placeHolder : The value appears initially in the droplist section
- className?
- items : items appear in the drop list
- heading : the title of the options in the drop list (eg. sizes)
- setSelectedOption : Used to get the selected option. This prop is the setState function you pass to the component.

```javascript
const [item, setItem] = (useState < null) | (string > null);
<Switcher
  items={["Large", "Medium", "Small"]}
  heading="Sizes"
  setSelectedOption={(item: null | string) => setItem(item)}
  placeHolder="Select your size"
/>;
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719664116/VODO/reusable%20components/Switcher_s4zuiy.png)

</section>

//=================================================

//=================================================

<section id="InputFile">
### 7- InputFile

Used to upload file to a specific URL ( images ony allowed !! ).

#### The InputFile takes 3 props :

- url : url to which file will be uploaded.
- className?
- disabled ?: boolean value to indicate of the input is disabled or not

```javascript
<InputFile url="https://store1.gofile.io/uploadFile" />
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719671300/VODO/reusable%20components/INputFile_ripmgb.png)

</section>

//=================================================

//=================================================

<section id="SideBar">

### 8- SideBar

```javascript
<SideBar />
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719671524/VODO/reusable%20components/SideBar_gkkpu6.png)

</section>

//=================================================

//=================================================

<section id="UserInput">

### 9- UserInput

A drop list with a search bar.

#### The UserInput takes same props as default input field

```javascript
<UserInput label="Username" type={"text"} placeholder="type your username" />
<UserInput disabled label="Password" type={"password"} />
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719683933/VODO/reusable%20components/InputField_ldixiy.png)

</section>

//=================================================

//=================================================

<section id="Status">

### 10- Status

Button contains on/off status

#### The Status takes one prop ( status ) which takes only two value : on - off

```javascript
<Status status={"on"} />
<Status status={"off"} />
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719675931/VODO/reusable%20components/Status_ksxisa.png)

</section>

//=================================================

//=================================================

<section id="NavigationTrail">

### 11- NavigationTrail

#### The NavigationTrail takes 2 props :

- trailPage : The current page with the different color which will be the last element in the trial
- trailLink : These are the remaining previous elements in the trial. It is an array of objects, each object contains two properties ( label : the name of elements & href : the link to which the label refers )

```javascript
<NavigationTrail
  trailLink={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/" },
  ]}
  trailPage="Products Details"
/>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719676900/VODO/reusable%20components/NAvigation_trial_gp0l2j.png)

</section>

//=================================================

//=================================================

<section id="UserProfile">

### 12- UserProfile

#### The UserProfile takes 4 props :

- name
- email
- avatarUrl : img url
- className ?: addition TailwindCSS classes to apply

```javascript
<UserProfile
  className=" rounded-b-[32px]"
  name="Zain Ali"
  email="zain20@gmail.com"
  avatarUrl={avatar}
/>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719678030/VODO/reusable%20components/UserProfile_xszr9n.png)

</section>

//=================================================

//=================================================

<section id="SearchInput">

### 13- SearchInput

#### The SearchInput takes 4 props :

- setInputValue : setState function to get the value of the input field
- disabled ?
- props ?: default input props
- className ?: addition TailwindCSS classes to apply

```javascript
<SearchInput setInputValue={setInputValue} disabled />
<SearchInput setInputValue={setInputValue}/>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719678813/VODO/reusable%20components/Search_input_e7gqzu.png)

</section>

//=================================================

//=================================================

<section id="TextArea">

### 14- TextArea

#### The TextArea takes 4 props :

- label
- disabled?: boolean;
- placeHolder?
- className?: TailwindCSS classes;
- error?: error message to show;
- success?: success message to show;
- onChange?
- onBlur?
- onFocus?

```javascript
<TextArea
    label="Tell us your opinion"
    placeHolder="Type something here"
/>
<TextArea
    label="Tell us your opinion"
    placeHolder="Type something here"
    disabled
/>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719679516/VODO/reusable%20components/TextArea_vgcgkc.png)

</section>

//=================================================

//=================================================

<section id="Icons">

### 14- Icons

Various icons as shown in the image below.

```javascript
<EyeIcon />
<AddBusinessIcon />
<ArrowDownIcon />
<ArrowMenuIcon />
<BurgerIcon />
<CalendarIcon />
<DeleteIcon />
<DownloadIcon />
<ExportIcon />
<FilterSearchIcon />
<LinkIcon />
<LogoIcon />
<ModulesIcon />
<NotificationIcon />
<PaypalIcon />
<PeopleIcon />
<PhoneIcon />
<StatsIcon />
<TicketIcon />
<EditIcon />
<ErrorIcon />
<TickIcon />
<ClearIcon />
<EyePasswordIcon />
<EyeSlashIcon />
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719684241/VODO/reusable%20components/Icons_mustafa_ccldbt.png)

</section>

//=================================================

//=================================================

<section id="table">

### 15- Table

#### The Table takes 2 props:

- TabelHead : Array of objects that represent headers, each object has two keys (accessorKey : is the key used in the tabelData array's objects to specify the value at a specific column & header : is the header that appears in the UI )
- TabelData : data added to table which is an array of objects, each object has keys ( which representthe accessorKey of the corresponding header ) and values

This is how the table component is used :

```javascript
<MainTabel TabelHead={tableHead} TabelData={tableData} />
```

##### How to set the headers ?

To set headers you need to pass an array of objects to the columns prop, each object consists of 3 keys : id of the column - acessorKey ( Which is used for passing data in the data array ) - header ( The column's header that will appear in the table ).

```javascript
export const columns: ColumnDef<Column>[] = [
  const tableHead: tableHeaderType[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  .... remaining of headers
];
```

##### How to set table's data ?

To set headers you need to pass an array of objects to the data prop, each object consists of keys, each key is the accessorKey of the header which is defined in the objects of the columns' array.

```javascript
export const tableData: Column[] = [
  {
    id: 'id',
    imageUrl: 'image',
    sku: 'sku',
    name: 'name',
    category: 'category',
    priceCost: 100,
    price: 100,
    kind: 'kind',
    virtual: 'virtual',
    status: 'status',
    actions: (
    <DropDown
      selections={selections}
      mainIcon={<EditIcon className="w-6 h-6" />}
      title="Actions"
    />
  ),
  },
  {
    id: 'id',
    imageUrl: 'image',
    sku: 'sku',
    name: 'name',
    category: 'category',
    priceCost: 100,
    price: 200,
    kind: 'kind',
    virtual: 'virtual',
    status: 'status',
    supplierChair: 'supplierChair',
    actions: (
    <DropDown
      selections={selections}
      mainIcon={<EditIcon className="w-6 h-6" />}
      title="Actions"
    />
  ),
  },
  .... The remaining of the data ..
]
```

\*\*\*\* HINT : DropDown is illustrated down in the docs.

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719861786/VODO/reusable%20components/Table_goamak.png)

</section>

//=================================================

//=================================================

<section id="dropDown">

### 16- DropDown

#### The DropDown takes 3 props:

- selections : Array of objects, each object has 3 keys (icon , name and action ( the method that is called when click on the corresponding option in the droplist ) )
- mainIcon : Icon of the droplist
- title : title appears upwards the options.

This is how the table component is used :

```javascript
<DropDown
  selections={selections}
  mainIcon={<EditIcon className="w-6 h-6" />}
  title="Actions"
/>
```

##### Selections array

```javascript
interface dropOptions {
  icon?: ReactNode;
  name: string;
  action: any;
}

const selections: dropOptions[] = [
  {
    icon: <Copy className="w-4 h-4 mr-2" />,
    name: "Copy",
    action: () => {
      console.log("copy");
    },
  },

  {
    icon: <Edit className="w-4 h-4 mr-2" />,
    name: "Edit",
    action: () => {
      console.log("edit");
    },
  },
];
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719954873/VODO/reusable%20components/DropDown_phhpub.png)

</section>

//=================================================

//=================================================

<section id="pagination">

### 17- PaginationComponent

#### It has two sections :

- The left one for pages
- The right one for limit

#### The PaginationComponent takes 3 props:

- totalDataLength : total number of rows (data)
- setPageFn : setState function to get the current page
- setLimitFn : setState function to get the limit

This is how the table component is used :

```javascript
<PaginationComponent
  setLimitFn={() => {}}
  setPageFn={() => {}}
  totalDataLength={100}
/>
```

![App Screenshot](https://res.cloudinary.com/dvvmu40wx/image/upload/v1719955058/VODO/reusable%20components/pagination_jwxzkr.png)

</section>
