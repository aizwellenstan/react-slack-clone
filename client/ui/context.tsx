// import React, { createContext, useState, useContext } from 'react';
// import dayjs, { Dayjs } from 'dayjs';

// interface LocaleState {
//   /** Whether or not should show the sidebar */
//   showSidebar: boolean;
//   /** Update the value of `showSideBar` */
//   setShowSidebar: (value: boolean) => void;
//   /** Focused date of timetable */
//   focusedDate: Dayjs;
//   /**
//    * Update the value of focusedDate.
//    * focusedDate is technically a readonly value so this function
//    * should only be used in the timetable component to tell outside
//    * of the component that the date was updated.
//    */
//   setFocusedDate: (value: Dayjs) => void;
// }

// export const LocalStateContext = createContext<LocaleState>({
//   showSidebar: false,
//   setShowSidebar: _value => {},
//   focusedDate: dayjs(),
//   setFocusedDate: _value => {},
// });

// export const LocalStateProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [focusedDate, setFocusedDate] = useState(dayjs());

//   const value = {
//     showSidebar,
//     setShowSidebar,
//     focusedDate,
//     setFocusedDate,
//   };

//   return (
//     <LocalStateContext.Provider value={value}>
//       {children}
//     </LocalStateContext.Provider>
//   );
// };

// export const useStateValue = () => useContext(LocalStateContext);

import React, { createContext, useContext, useReducer } from "react";

interface LocaleState {
    user: any
  }

export const StateContext = createContext<LocaleState>({
  user: "SET_USER"
});


// export const LocalStateProvider = ({ reducer, initialState, children } :any) => (
//   <StateContext.Provider value={useReducer({reducer, initialState})}>
//     {children}
//   </StateContext.Provider>
// );

export const LocalStateContext = createContext<LocaleState>({
  user: "SET_USER"
});

export const LocalStateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

