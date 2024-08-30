/* eslint react/no-unescaped-entities: "off" */
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>System Fundamentals!</AlertDialogTitle>
          <AlertDialogDescription>
            {`I'm Earl Dominic Ado, a freelance full-stack developer, and I'll be guiding you through the essentials of modern web development. This course will cover key topics such as front-end and back-end technologies, database management, and system integration. You'll gain a comprehensive understanding of how to build and maintain web applications, including how to seamlessly connect different components and technologies to create robust, dynamic solutions.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClose}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Modal;
