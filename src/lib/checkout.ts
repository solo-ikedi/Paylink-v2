import { supabase } from "@/lib/supabaseClient";

export const handleCheckout = async (plan: string, price: number) => {
  // fake payment data
  const res = {
    email: "testuser@email.com", 
    amount: price,
    plan,
    reference: "ref_" + Date.now(),
    status: "success",
    payment_method: "Card",
    card_last4: "4242",
    currency: "NGN",
  };

  const { error } = await supabase.from("transactions").insert([res]);

  if (error) {
    console.error("Error saving transaction:", error);
    alert("Something went wrong!");
  } else {
    alert(`✅ Payment successful! ₦${price} for ${plan} plan.`);
  }
};




