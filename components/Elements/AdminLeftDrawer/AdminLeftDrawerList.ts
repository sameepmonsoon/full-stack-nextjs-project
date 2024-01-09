import { FaHandHoldingDollar, FaHouse } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { LuGoal } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { SlCalculator } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
export const adminLeftDrawerList = [
  {
    title: "Dashboard",
    list: [
      { icon: FaHouse, listName: "Home" },
      { icon: GoGraph, listName: "Analytics" },
    ],
  },
  {
    title: "Finance",
    list: [
      { icon: GiWallet, listName: "Income" },
      { icon: FaMoneyBillTransfer, listName: "Expenses" },
      { icon: FaHandHoldingDollar, listName: "Loans" },
      { icon: FaSackDollar, listName: "Savings" },
      { icon: SlCalculator, listName: "Budget" },
      { icon: LuGoal, listName: "Goals" },
    ],
  },
  {
    title: "Investment",
    list: [
      { icon: RiExchangeDollarFill, listName: "Trancactions" },
      { icon: PiSuitcaseSimpleFill, listName: "Portfolio" },
    ],
  },
  {
    title: "Overview",
    list: [
      { icon: HiClipboardDocumentList, listName: "Reports" },
      { icon: FaCalendarAlt, listName: "Calendar" },
    ],
  },
];
