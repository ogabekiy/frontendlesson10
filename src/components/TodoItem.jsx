import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function TodoItem({ title, deleteItem, id, editItem }) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardFooter>
                    <Button
                        className="mr-5"
                        onClick={() => {
                            deleteItem(id);
                        }}
                        variant="destructive"
                        type="button"
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={() => {
                            editItem(id);
                        }}
                        variant="outline"
                        type="button"
                    >
                        Edit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
